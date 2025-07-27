import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ContactCTA from '@/components/ContactCTA';
import SEOHead from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const BlogPost = () => {
  const { t } = useLanguage();
  const { id } = useParams();

  // Mock blog post content - in real app, this would come from a CMS or API
  const blogPost = {
    id: 'transformacao-digital-2025',
    title: t('blog.posts.digital2025.title'),
    excerpt: t('blog.posts.digital2025.excerpt'),
    content: t('blog.posts.digital2025.content'),
    date: '2024-01-15',
    readTime: '8 min',
    category: t('blog.categories.strategy'),
    image: '/api/placeholder/1200/600'
  };

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
        title={`${blogPost.title} - Alexandre Leonardo`}
        description={blogPost.excerpt}
      />
      
      {/* Back Navigation */}
      <div className="py-6 border-b border-border/50">
        <div className="container mx-auto px-6">
          <Button variant="ghost" asChild className="group">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {t('blog.backToBlog')}
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <div className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <Badge variant="outline">{blogPost.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {blogPost.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {blogPost.excerpt}
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(blogPost.date)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  {t('blog.share')}
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href={`https://linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
              <div className="w-full h-full bg-muted/50 flex items-center justify-center">
                <span className="text-muted-foreground">Featured Article Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-foreground leading-relaxed space-y-6">
                {blogPost.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Author CTA */}
      <div className="py-16 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-2xl">AL</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Alexandre Leonardo</h3>
              <p className="text-muted-foreground">
                {t('blog.author.description')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link to="/about">
                  {t('blog.author.learnMore')}
                </Link>
              </Button>
              <Button asChild>
                <a href="mailto:alexandreleonardo.pt@gmail.com">
                  {t('blog.author.connect')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ContactCTA />
    </>
  );
};

export default BlogPost;