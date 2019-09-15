package handlers

import (
	"encoding/json"
	"net/http"
)

// GetRecipes ...
func GetRecipes(w http.ResponseWriter, r *http.Request) {
	j, _ := json.Marshal(map[string]string{"message": "Get Recipes"})

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(j)
}

// GetRecipeByID ...
func GetRecipeByID(w http.ResponseWriter, r *http.Request) {
	j, _ := json.Marshal(map[string]string{"message": "Get Recipe by ID"})

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(j)
}

// CreateRecipe ...
func CreateRecipe(w http.ResponseWriter, r *http.Request) {
	j, _ := json.Marshal(map[string]string{"message": "Create Recipe"})

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(j)
}

// UpdateRecipe ...
func UpdateRecipe(w http.ResponseWriter, r *http.Request) {
	j, _ := json.Marshal(map[string]string{"message": "Create Recipe"})

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(j)
}

// DeleteRecipe ...
func DeleteRecipe(w http.ResponseWriter, r *http.Request) {
	j, _ := json.Marshal(map[string]string{"message": "Delete Recipe"})

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(j)
}
