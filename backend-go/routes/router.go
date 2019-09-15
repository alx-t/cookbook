package routes

import "github.com/gorilla/mux"

// InitRoutes ...
func InitRoutes() *mux.Router {
	router := mux.NewRouter().StrictSlash(false)
	// router = SetRecipeRoutes(router)
	return router
}
