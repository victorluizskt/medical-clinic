create table pessoa  (
	codigo int primary key,
	nome varchar(50),
	email varchar(50),
	telefone varchar(50),
	cep_pessoa varchar(10),
	logradouro varchar (50),
	bairro varchar(50),
	cidade varchar(50),
	estado varchar(50),
)

create table funcionario (
	data_contrato DATETIME,
	salario decimal,
	senha_hash varchar(50),
	codigo int foreign key references pessoa(codigo)
)

alter table funcionario alter column codigo int not null;
alter table funcionario add primary key (codigo);

create table paciente (
	peso decimal,
	altura decimal,
	senha_hash varchar(50),
	tipo_sanguineo varchar(4),
	codigo int foreign key references pessoa(codigo)
)

create table medico (
	especialidade varchar(50),
	crm varchar(50),
	codigo int foreign key references funcionario(codigo)
)

alter table medico alter column codigo int not null;
alter table medico add primary key (codigo);

create table agenda  (
	codigo int primary key not null,
	data datetime,
	horario varchar(50),
	nome varchar(50),
	email varchar(10),
	telefone varchar (50),
	codigo_medico int foreign key references medico(codigo),
)

alter table agenda alter column codigo_medico int not null;
