import React, { useState, useEffect, useRef } from 'react';

// Timeline component
//
// This version localises date formatting and status labels using the
// language context and the translations object. It retains the
// horizontally scrollable structure while allowing users to switch
// between Portuguese and English. The progress indicator and
// status badges now reflect the current language, improving
// accessibility and consistency across the site.

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import translations from '@/lib/translations';
import { useLanguage } from '@/context/LanguageContext';

interface TimelineItem {
  id: number;
  title: string;
  institution: string;
  date: string;
  /**
   * Status of the certification or degree. In addition to the existing
   * "completed" and "planned" states, we introduce an explicit
   * "in_progress" state to represent items that have started but are
   * not yet complete. This allows the timeline to distinguish
   * ongoing activities (e.g. a master’s degree currently underway)
   * from those merely planned for the future.
   */
  status: 'completed' | 'planned' | 'in_progress';
  description: string;
}

interface TimelineData {
  timeline: TimelineItem[];
}

const Timeline: React.FC = () => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Access current language from context
  const { language } = useLanguage();

  useEffect(() => {
    const fetchTimelineData = async () => {
      try {
        const response = await fetch('/data/certifications.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: TimelineData = await response.json();
        setTimelineData(data.timeline);
      } catch (err) {
        console.error('Error fetching timeline data:', err);
        setError('Failed to load timeline data');
      } finally {
        setLoading(false);
      }
    };

    fetchTimelineData();
  }, []);

  useEffect(() => {
    const updateScrollButtons = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener('scroll', updateScrollButtons);
    }
  }, [timelineData]);

  // Centra o item em progresso (estado 'in_progress') quando a timeline é carregada.
  useEffect(() => {
    if (!loading && scrollContainerRef.current) {
      // Procurar o primeiro item em progresso
      const inProgressIndex = timelineData.findIndex((item) => item.status === 'in_progress');
      if (inProgressIndex !== -1) {
        const container = scrollContainerRef.current;
        const items = container.querySelectorAll<HTMLElement>('.timeline-item');
        const anchorEl = items[inProgressIndex] as HTMLElement | undefined;
        if (anchorEl) {
          const containerWidth = container.clientWidth;
          const anchorCenter = anchorEl.offsetLeft + anchorEl.offsetWidth / 2;
          // Calcular a posição de scroll de forma a centrar o elemento
          const targetScroll = Math.max(anchorCenter - containerWidth / 2, 0);
          container.scrollTo({ left: targetScroll, behavior: 'auto' });
          setScrollPosition(targetScroll);
          // Garantir que os botões de scroll reflectem a nova posição
          setTimeout(() => {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
          }, 50);
        }
      }
    }
  }, [loading, timelineData]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newPosition = direction === 'left'
        ? scrollPosition - scrollAmount
        : scrollPosition + scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
      setScrollPosition(newPosition);
    }
  };

  // Format dates according to the current language. Portuguese uses
  // "pt-PT" while English uses "en-GB" so that month names are localised.
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const locale = language === 'en' ? 'en-GB' : 'pt-PT';
    return date.toLocaleDateString(locale, { year: 'numeric', month: 'long' });
  };

  // Determine if a status denotes completion
  const isCompleted = (status: string) => status === 'completed';

  /**
   * Return the translated status label based on the current language.
   * The timeline previously mapped only two states (completed vs
   * planned) directly to translations. With the introduction of the
   * "in_progress" state, we centralise the logic in this helper
   * function. Any unrecognised status will default to the planned
   * label.
   */
  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return translations[language].projectDetail.statusCompleted;
      case 'in_progress':
        return translations[language].projectDetail.statusInProgress;
      default:
        return translations[language].projectDetail.statusPlanned;
    }
  };

  // Compute how much of the timeline should be filled based on current date
  const getCurrentDatePosition = () => {
    const currentDate = new Date();
    const sorted = [...timelineData].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
    let completedCount = 0;
    for (const item of sorted) {
      if (new Date(item.date) <= currentDate) {
        completedCount++;
      } else {
        break;
      }
    }
    return Math.min((completedCount / sorted.length) * 100, 100);
  };

  if (loading) {
    return (
      <div className="w-full py-12 flex justify-center">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-muted rounded w-48" />
          <div className="h-32 bg-muted rounded w-96" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-12 text-center">
        <p className="text-muted-foreground">{error}</p>
      </div>
    );
  }

  const sortedData = [...timelineData].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
  const fillPercentage = getCurrentDatePosition();

  return (
    <div className="w-full py-8">
      <div className="relative">
        {/* Navigation Buttons */}
        {canScrollLeft && (
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
        {canScrollRight && (
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-accent"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
        {/* Timeline Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="relative flex items-center min-w-max px-8">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-timeline-planned -translate-y-1/2">
              {/* Filled portion for completed items */}
              <div
                className="h-full bg-timeline-completed transition-all duration-1000 ease-out animate-timeline-fill"
                style={{ width: `${fillPercentage}%` }}
              />
            </div>
            {/* Timeline Items */}
            <div className="flex items-center space-x-timeline relative z-10">
              {sortedData.map((item, index) => (
                <div
                  key={item.id}
                  /*
                   * Adiciona a classe "timeline-item" a cada cartão para que possamos
                   * calcular a posição da ancora do mestrado em curso. Esta classe
                   * é utilizada pelo hook de efeitos para localizar o elemento
                   * correspondente na DOM e centrar a scrollbox nesse ponto.
                   */
                  className="timeline-item flex flex-col items-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline Node */}
                  <div className="relative mb-4">
                    <div
                      className={
                        `w-4 h-4 rounded-full border-4 transition-all duration-300 animate-scale-in ` +
                        (isCompleted(item.status)
                          ? 'bg-timeline-completed border-timeline-completed shadow-lg'
                          : 'bg-background border-timeline-planned border-dashed')
                      }
                      style={{ animationDelay: `${index * 100 + 200}ms` }}
                    />
                    {isCompleted(item.status) && (
                      <div className="absolute inset-0 rounded-full bg-timeline-completed/20 animate-ping" />
                    )}
                  </div>
                  {/* Timeline Card */}
                  <Card className="w-80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        {/* Date Badge */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">{formatDate(item.date)}</span>
                          <div
                            className={
                              `ml-2 px-2 py-1 rounded-full text-xs font-medium ` +
                              (isCompleted(item.status)
                                ? 'bg-timeline-completed/10 text-timeline-completed'
                                : 'bg-timeline-planned/20 text-timeline-planned')
                            }
                          >
                            {/* Status badge translated according to the current language */}
                            {getStatusLabel(item.status)}
                          </div>
                        </div>
                        {/* Title */}
                        <h3 className="font-semibold text-lg leading-tight group-hover:text-timeline-primary transition-colors">
                          {language === 'en' && (item as any).title_en ? (item as any).title_en : item.title}
                        </h3>
                        {/* Institution */}
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span className="font-medium">
                            {language === 'en' && (item as any).institution_en ? (item as any).institution_en : item.institution}
                          </span>
                        </div>
                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {language === 'en' && (item as any).description_en ? (item as any).description_en : item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Progress Indicator */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-timeline-completed" />
              <span>{translations[language].projectDetail.statusCompleted}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border-2 border-timeline-planned border-dashed bg-background" />
              <span>{translations[language].projectDetail.statusPlanned}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
