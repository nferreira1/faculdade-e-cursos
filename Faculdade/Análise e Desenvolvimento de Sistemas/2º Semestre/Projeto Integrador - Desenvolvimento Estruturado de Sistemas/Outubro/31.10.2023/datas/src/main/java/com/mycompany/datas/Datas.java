/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */
package com.mycompany.datas;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 *
 * @author nathan.hvferreira
 */
public class Datas {

    public static void main(String[] args) {

        Date hoje = new Date();
        SimpleDateFormat formatador = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

        System.out.println(formatador.format(hoje));

        Date dataFutura = new Date(123, 11, 30); // 1900 + 123 = 2023

        System.out.println(dataFutura);
        System.out.println(hoje);

        if (hoje.before(dataFutura)) {
            System.out.println("correto");
            return;
        }

        System.out.println("incorreto");

    }

}
