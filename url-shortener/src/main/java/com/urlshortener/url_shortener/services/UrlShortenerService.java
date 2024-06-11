package com.urlshortener.url_shortener.services;

import java.security.SecureRandom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.urlshortener.url_shortener.models.UrlShortener;
import com.urlshortener.url_shortener.repository.UrlShortenerRepository;

@Service
public class UrlShortenerService {

    @Autowired
    private UrlShortenerRepository urlShortenerRepository;

    private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final int LENGTH = 6;
    private static final SecureRandom RANDOM = new SecureRandom();

    /**
     * Metodo que recibe una url por parámetros y devuelve un url corto
     * 
     * @param url url original
     * @return url corto
     */
    public String shortUrl(String url) {
        try {
            // Inicializamos un objeto UrlShortener
            UrlShortener urlShortener = new UrlShortener();

            // Anadimos la url al objeto
            urlShortener.setUrl(url);

            // Generamos un codigo alfanumerico de 6 caracteres
            StringBuilder urlShort = new StringBuilder(LENGTH);
            for (int i = 0; i < LENGTH; i++) {
                int index = RANDOM.nextInt(CHARACTERS.length());
                urlShort.append(CHARACTERS.charAt(index));
            }

            // Se lo añadimos al objeto
            urlShortener.setUrlShort(urlShort.toString());

            // Devolvemos la ruta corta
            return urlShortenerRepository.save(urlShortener).getUrlShort();
        } catch (Exception e) {
            return null;
        }
    }

    public String getUrl(String shortUrl) {
        try {
            return urlShortenerRepository.findByUrlShort(shortUrl).getUrl();
        } catch (Exception e) {
            return null;
        }
    }
}
