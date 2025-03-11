package news

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/log"
	"github.com/gofiber/fiber/v2/utils"
)

type NewsHandler struct {
	newsService *NewsService
}

// TODO: Add tests
// TODO: Add docunmentation
func NewNewsHandler() *NewsHandler {
  newsService := NewNewsService()

  return &NewsHandler{newsService: newsService}
}

// TODO: Add tests
// TODO: Add docunmentation
// TODO: intercept the response, log error and return a response in decorator
func (h *NewsHandler) News(c *fiber.Ctx) error {
  category := utils.CopyString(c.Query("category"))

	news, err := h.newsService.News(category)

	if err != nil {
    log.Error(err)

    return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
      "statusCode": fiber.StatusInternalServerError,
      "message": fiber.ErrInternalServerError.Message,
    })
	}

	return c.JSON(fiber.Map{"totalResults": news.TotalResults, "result": news.Articles})
}
