package com.microservice.oauth;

import java.util.Collections;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
public class WebSecutiryConfigurer extends WebSecurityConfigurerAdapter{
	
	@Override @Bean
	protected AuthenticationManager authenticationManager() throws Exception {
		return super.authenticationManager();
	}
	
	@Override @Bean
	protected UserDetailsService userDetailsService() {
		return super.userDetailsService();
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
 
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication()
		.passwordEncoder(passwordEncoder())
		.withUser("caiza")
		.password(passwordEncoder().encode("caizapwd"))
		.roles("USER");
	}
	
	@Override
    protected void configure (HttpSecurity http) throws Exception {
         http.cors();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource () {

        UrlBasedCorsConfigurationSource source;
        source = new UrlBasedCorsConfigurationSource();

        CorsConfiguration configuration = new CorsConfiguration();
        List<String> all = Collections.singletonList("*");
        configuration.setAllowedOrigins(all);
        configuration.setAllowedMethods(all);
        configuration.setAllowedHeaders(all);

        source.registerCorsConfiguration("/**", configuration);
        return source;

    }
}
