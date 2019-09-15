package routes

import (
	"github.com/alx-t/cookbook/backend-go/handlers"
	"github.com/gorilla/mux"
)

// SetRecipeRoutes ...
func SetRecipeRoutes(router *mux.Router) *mux.Router {
	router.HandleFunc("/recipes", handlers.GetRecipes).Methods("GET")
	router.HandleFunc("/recipes", handlers.CreateRecipe).Methods("POST")
	router.HandleFunc("/recipes/{id}", handlers.GetRecipeByID).Methods("GET")
	router.HandleFunc("/recipes/{id}", handlers.UpdateRecipe).Methods("PATCH")
	router.HandleFunc("/recipes/{id}", handlers.DeleteRecipe).Methods("DELETE")

	return router
}
