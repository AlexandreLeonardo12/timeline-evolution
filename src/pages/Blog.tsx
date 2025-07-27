import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ContactCTA from '@/components/ContactCTA';
import SEOHead from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { t } = useLanguage();

  // Mock blog posts - in real app, these would come from a CMS or API
  const blogPosts = [
    {
      id: 'transformacao-digital-2025',
      title: t('blog.posts.digital2025.title'),
      excerpt: t('blog.posts.digital2025.excerpt'),
      date: '2024-01-15',
      readTime: '8 min',
      category: t('blog.categories.strategy'),
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'lideranca-agil',
      title: t('blog.posts.agileLeadership.title'),
      excerpt: t('blog.posts.agileLeadership.excerpt'),
      date: '2024-01-10',
      readTime: '6 min',
      category: t('blog.categories.leadership'),
      featured: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'inovacao-organizacional',
      title: t('blog.posts.innovation.title'),
      excerpt: t('blog.posts.innovation.excerpt'),
      date: '2024-01-05',
      readTime: '10 min',
      category: t('blog.categories.innovation'),
      featured: false,
      image: '/api/placeholder/600/400'
    }
  ];

  const categories = [
    t('blog.categories.all'),
    t('blog.categories.strategy'),
    t('blog.categories.leadership'),
    t('blog.categories.innovation'),
    t('blog.categories.technology')
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(t('blog.locale'), {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <SEOHead 
        title={`${t('blog.title')} - Alexandre Leonardo`}
        description={t('blog.description')}
      />
      
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-br from-background via-muted/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              {t('blog.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('blog.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="py-8 border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map(post => (
        <div key={post.id} className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge variant="secondary">{t('blog.featured')}</Badge>
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  
                  <Button asChild className="group">
                    <Link to={`/blog/${post.id}`}>
                      {t('blog.readMore')}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                    <div className="w-full h-full bg-muted/50 flex items-center justify-center">
                      <span className="text-muted-foreground">Featured Article Image</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Blog Posts Grid */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map(post => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                    <div className="w-full h-full bg-muted/50 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Article Image</span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                      <h3 className="text-xl font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="sm" asChild className="group">
                        <Link to={`/blog/${post.id}`}>
                          {t('blog.read')}
                          <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="py-16 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {t('blog.newsletter.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('blog.newsletter.description')}
            </p>
            <Button size="lg" asChild>
              <a href="mailto:alexandreleonardo.pt@gmail.com?subject=Newsletter Subscription">
                {t('blog.newsletter.cta')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <ContactCTA />
    </>
  );
};

export default Blog;