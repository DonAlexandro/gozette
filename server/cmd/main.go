package main

import (
	"github.com/DonAlexandro/gozette/internal/news"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/joho/godotenv"
)

func main() {
  errEnv := godotenv.Load()

  if errEnv != nil {
    panic(errEnv)
  }

  app := fiber.New()

  app.Use(recover.New())

	app.Get("/", func(c *fiber.Ctx) error {
    return c.JSON(fiber.Map{
      "result": "Healthcheck passed",
    })
	})

  newsHandler := news.NewNewsHandler()

  app.Get("/news", newsHandler.News)

	app.Listen(":8080")
}
