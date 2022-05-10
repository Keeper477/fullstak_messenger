package com.shubh.kafkachat.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@Configuration
@EnableJpaRepositories(basePackages = "com.shubh.kafkachat.repositories")
public class JPAConfig { }