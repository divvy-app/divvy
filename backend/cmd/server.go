package main

import (
	"divvy/internal/api"
	"divvy/internal/handlers"
	"log"

	"github.com/gin-gonic/gin"
)

func runServer() {
	router := gin.Default()

	srv := handlers.NewServer()
	api.RegisterHandlers(router, srv)

	if err := router.Run(); err != nil {
		log.Fatal(err)
	}
}
