"use strict"
// Creado con Codeium

const express = require("express");
const router = express.Router();

const { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario } = require("../controllers/usuariosController");
const { requiredScopes } = require("express-oauth2-jwt-bearer");

router.get("/", requiredScopes("read:usuarios"), getAllUsuarios);
router.get("/:id", requiredScopes("read:usuarios"), getUsuarioById);
router.post("/", requiredScopes("write:usuarios"), createUsuario);
router.put("/:id", requiredScopes("write:usuarios"), updateUsuario);
router.delete("/:id", requiredScopes("write:usuarios"), deleteUsuario);

module.exports = router;