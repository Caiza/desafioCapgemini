package br.com.estudo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.data.web.config.EnableSpringDataWebSupport;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;
import org.springframework.web.client.RestTemplate;

import feign.RequestInterceptor;
import feign.RequestTemplate;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableFeignClients
@EnableSpringDataWebSupport
@EnableSwagger2
@EnableResourceServer
@EnableHystrix
public class BancoApplication {
	
	@Bean
	public RequestInterceptor getRequestIntercepto() {
		return new RequestInterceptor() {
			
			@Override
			public void apply(RequestTemplate template) {
				Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
				if(authentication == null) {
					return;
				}
				OAuth2AuthenticationDetails details = (OAuth2AuthenticationDetails) authentication.getDetails();
				template.header("Authorization", "Bearer" + details.getTokenValue());
			}
		};
	}
	
	@Bean
	@LoadBalanced
	public RestTemplate getRestTemplate() {
		return new RestTemplate();
	}

	public static void main(String[] args) {
		SpringApplication.run(BancoApplication.class, args);
	}

}
