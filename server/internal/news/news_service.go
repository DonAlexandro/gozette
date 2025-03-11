package news

import "github.com/DonAlexandro/gozette/internal/news/domain"

type NewsService struct {
  newsRepository *NewsRepository
}

// TODO: Add tests
// TODO: Add docunmentation
func NewNewsService() *NewsService {
  newsRepository := NewNewsRepository()

  return &NewsService{newsRepository: newsRepository}
}

// TODO: Add tests
// TODO: Add docunmentation
func (r *NewsService) News(category string) (*domain.ArticlesResponse, error) {
  return r.newsRepository.News(category)
}
