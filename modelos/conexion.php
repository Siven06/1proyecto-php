<?php

    class Conexion{

        static public function conectar(){

            $link = new PDO("mysql:host=localhost:3306;dbname=1proyecto_db","root","");
            return $link;

        }

    }