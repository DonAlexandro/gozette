package domain

import "time"

type Article struct {
	Source      Source    `json:"source"`
	Author      *string   `json:"author"`
	Title       string    `json:"title"`
	Description *string   `json:"description"`
	URL         string    `json:"url"`
	URLToImage  *string   `json:"urlToImage"`
	PublishedAt time.Time `json:"publishedAt"`
}

type Source struct {
	ID   *string `json:"id"`
	Name string  `json:"name"`
}

type ArticlesResponse struct {
    TotalResults int `json:"totalResults"`
    Articles []Article `json:"articles"`
  }
