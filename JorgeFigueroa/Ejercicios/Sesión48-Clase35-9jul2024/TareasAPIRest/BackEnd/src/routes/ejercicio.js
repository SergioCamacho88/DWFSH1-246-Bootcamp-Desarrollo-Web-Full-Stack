const { Router } = require("express");
const { createClient } = require("@supabase/supabase-js");
// Create a single supabase client for interacting with your database
const supabase = createClient(
    "https://srlydytvjzipvxmzrvbz.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNybHlkeXR2anppcHZ4bXpydmJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0ODM2NTgsImV4cCI6MjAzNjA1OTY1OH0.k6hH0RPNGsFhSZSpsGhaZZd054xN-aKyEKS2NuBKirc"
);
const router = Router();

router.get("/", async (req, res) => {
    let { data: usuarios, error } = await supabase
        .from('usuarios')
        .select('id,nombres,nacionalidad,genero')
        res.json(usuarios)
});

router.get("/:id", async (req, res) => {
    let { data: usuarios, error } = await supabase
        .from("usuarios")
        .select("*")
        .eq("id", req.params.id);

    res.json(usuarios);
});

router.post("/", async (req, res) => {
    const { nombres, genero, nacionalidad } = req.body

    if ( nombres && genero ) {
        const { data: ejercicios, error } = await supabase
            .from("usuarios")
            .insert([
                {
                nombres: nombres,
                genero: genero,
                nacionalidad: nacionalidad
                }
            ])
            .select();
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(ejercicios) 
            }
    } else {
        res.status(400).json({error: "El nombre y el género son obligatorios."})
    }
});

router.put("/", async (req, res) => {
    const { id, nombres, genero, nacionalidad } = req.body;
    
    if (nombres && genero) {
        
        const { data: ejercicios, error } = await supabase
            .from("usuarios")
            .update({
                nombres: nombres,
                genero: genero,
                nacionalidad: nacionalidad,
            })
            .eq("id", id)
            .select();
        
        if (error) {
            res.status(400).json(error);
        } else {
            res.status(200).json(ejercicios);
        }
    } else {
        res.status(400).json({
            error: "El nombre y el género son obligatorios.",
        });
    }
});

router.delete("/:id", async (req, res) => {
    const { data: usuarios, error } = await supabase
        .from("usuarios")
        .delete()
        .eq("id", req.params.id)
        .select()
    if (error) {
        res.status(400).json(error);
    } else {
        res.status(200).json(usuarios);
    }
});

module.exports = router;
