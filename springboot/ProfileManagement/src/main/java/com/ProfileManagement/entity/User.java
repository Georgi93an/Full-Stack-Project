package com.ProfileManagement.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "name",nullable = false, length = 20)
	private String name;
	
	@Column(name = "first_name",nullable = false, length = 30)
	private String firstName;
	
	@Column(name = "email",unique = true,length = 30, nullable = false)
	private String email;
	
	@ManyToOne
	@JoinColumn(name = "typeuser_id",nullable = false)
	private Type typeUser;

	public User() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Type getTypeUser() {
		return typeUser;
	}

	public void setTypeUser(Type typeUser) {
		this.typeUser = typeUser;
	}

	public User(Long id, String name, String firstName, String email, Type typeUser) {
		this.id = id;
		this.name = name;
		this.firstName = firstName;
		this.email = email;
		this.typeUser = typeUser;
	}

}
