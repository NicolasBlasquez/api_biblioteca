"use strict"

// Generado por Codeium

// Import the Usuario model
const Usuario = require("../models/usuarioModel");

// Controller functions
const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ message: "Usuario not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createUsuario = async (req, res) => {
    try {
        const newUsuario = await Usuario.create(req.body);
        await newUsuario.save();
        res.status(201).json(newUsuario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateUsuario = async (req, res) => {
    try {
        const updatedUsuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedUsuario) {
            res.json(updatedUsuario);
        } else {
            res.status(404).json({ message: "Usuario not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteUsuario = async (req, res) => {
    try {
        const deletedUsuario = await Usuario.findByIdAndRemove(req.params.id);
        if (deletedUsuario) {
            res.json({ message: "Usuario deleted" });
        } else {
            res.status(404).json({ message: "Usuario not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario
};