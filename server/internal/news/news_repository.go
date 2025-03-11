package news

import (
	"encoding/json"
	"net/url"
	"os"

	"github.com/DonAlexandro/gozette/internal/news/domain"
	"github.com/gofiber/fiber/v2"
)

type NewsRepository struct{}

func NewNewsRepository() *NewsRepository {
  return &NewsRepository{}
}

// TODO: Add tests
// TODO: Add docunmentation
// TODO: move calling the api and parsing the body to a separate function
func (r *NewsRepository) News(category string) (*domain.ArticlesResponse, error) {
  baseUrl, errParseUrl := url.Parse("https://newsapi.org/v2/top-headlines")

  if errParseUrl != nil {
    return nil, errParseUrl
  }

  // TODO: Create an array queryParams with objects: name is the name of the query parameter and value is the value of the query parameter
  params := url.Values{}
  params.Add("country", "us")
  params.Add("pageSize", "10")
  params.Add("apiKey", os.Getenv("NEWS_API_KEY"))
  params.Add("category", category)

  baseUrl.RawQuery = params.Encode()
  requestUrl := baseUrl.String()

  request := fiber.Get(requestUrl)

  _, data, err := request.Bytes()

  if err != nil {
    return nil, err[0]
  }

  var response *domain.ArticlesResponse
  jsonErr := json.Unmarshal(data, &response)

  if jsonErr != nil {
    return nil, jsonErr
  }


  return response, nil
}

