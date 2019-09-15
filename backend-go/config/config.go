package config

import (
	"encoding/json"
	"log"
	"os"
)

func init() {
	initConfig()
	newDbSession()
}

type (
	configuration struct {
		Server, DBHost, DBPort, DBUser, DBPwd, DBName string
		LogLevel                                      int
	}
)

// AppConfig ...
var AppConfig configuration

func initConfig() {
	file, err := os.Open("config.dev.json")
	defer file.Close()
	if err != nil {
		log.Fatalf("[loadConfig]: %s\n", err)
	}
	decoder := json.NewDecoder(file)
	AppConfig = configuration{}
	err = decoder.Decode(&AppConfig)
	if err != nil {
		log.Fatalf("[loadAppConfig]: %s\n", err)
	}
}
