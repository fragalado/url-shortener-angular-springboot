package com.urlshortener.url_shortener.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.urlshortener.url_shortener.models.UrlShortener;

@Repository
public interface UrlShortenerRepository extends JpaRepository<UrlShortener, Long> {

    public UrlShortener findByUrlShort(String urlShort);
}
