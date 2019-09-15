package routes

import (
	"github.com/alx-t/cookbook/backend-go/handlers"
	"github.com/gorilla/mux"
)

// InitRoutes ...
func InitRoutes() *mux.Router {
	router := mux.NewRouter().StrictSlash(false)

	router.HandleFunc("/", handlers.Root).Methods("GET")
	router = SetRecipeRoutes(router)

	return router
}
