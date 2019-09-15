package handlers

import (
	"encoding/json"
	"net/http"
)

// Root ...
func Root(w http.ResponseWriter, r *http.Request) {
	j, _ := json.Marshal(map[string]string{"message": "It's working!"})

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(j)
}
