package br.com.estudo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.estudo.model.Conta;

@Repository
public interface ContaRepository extends JpaRepository<Conta, Long>{
	
	@Query("SELECT c FROM Conta c JOIN Cliente cl ON c.id = cl.conta.id  where cl.nome = :nomeCliente")
	Conta buscarConta(@Param("nomeCliente") String nome);

}
