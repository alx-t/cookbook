package main

import (
	"log"
	"net/http"

	"github.com/alx-t/cookbook/backend-go/config"
	"github.com/alx-t/cookbook/backend-go/routes"

	"github.com/codegangsta/negroni"
)

func main() {
	router := routes.InitRoutes()

	n := negroni.Classic()
	n.UseHandler(router)

	server := &http.Server{
		Addr:    config.AppConfig.Server,
		Handler: n,
	}

	log.Println("Listening...")
	server.ListenAndServe()
}
