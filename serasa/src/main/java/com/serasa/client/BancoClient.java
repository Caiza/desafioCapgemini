package com.serasa.client;

import org.springframework.cloud.openfeign.FeignClient;

@FeignClient("banco")
public interface BancoClient {
	
	
	
}