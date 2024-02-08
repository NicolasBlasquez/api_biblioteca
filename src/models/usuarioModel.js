"use strict"

// Generado con Codeium

const mongoose = require("mongoose");

// Define the Usuario schema
const usuarioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  // Add more fields as needed
});

// Create the Usuario model
const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;