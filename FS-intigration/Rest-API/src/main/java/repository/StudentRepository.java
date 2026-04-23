package com.AML2B.Rest_API.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.AML2B.Rest_API.model.Student;

public interface StudentRepository extends JpaRepository<Student,Integer>{
}