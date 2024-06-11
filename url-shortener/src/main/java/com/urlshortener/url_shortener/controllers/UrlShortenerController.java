package com.urlshortener.url_shortener.controllers;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.urlshortener.url_shortener.services.UrlShortenerService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class UrlShortenerController {

    @Autowired
    private UrlShortenerService urlShortenerService;

    @GetMapping("/")
    public ResponseEntity<?> shortUrl(@RequestParam String url) {
        try {
            String shortUrl = urlShortenerService.shortUrl(url);
            return shortUrl == null ? ResponseEntity.internalServerError().build() : ResponseEntity.ok(Collections.singletonMap("url", shortUrl));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/{url}")
    public ResponseEntity<?> getUrl(@PathVariable("url") String shortUrl) {
        try {
            String originalUrl = urlShortenerService.getUrl(shortUrl);
            return originalUrl == null ? ResponseEntity.internalServerError().build() : ResponseEntity.ok(Collections.singletonMap("url", originalUrl));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
