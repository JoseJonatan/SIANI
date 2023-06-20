/*drop database if exists siani;

CREATE DATABASE siani;;*/

CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_job VARCHAR(255) NOT NULL,
  user_tel VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  user_role VARCHAR(255),
  PRIMARY KEY(user_id)
);

CREATE TABLE general(
    quiz_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    gen_title VARCHAR(255) NOT NULL,
    gen_name VARCHAR(255) NOT NULL,
    gen_contact VARCHAR(255) NOT NULL,
    gen_tel VARCHAR(255) NOT NULL,
    gen_email VARCHAR(255) NOT NULL,
    gen_years VARCHAR(255) NOT NULL,
    gen_number VARCHAR(255) NOT NULL,
    gen_market VARCHAR(255) NOT NULL,
    gen_other VARCHAR(255),
	  gen_fecha TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE company(
  quiz_id VARCHAR (255),
  comp_profile VARCHAR(255),
  comp_annual VARCHAR(255),
  comp_rate VARCHAR(255),
  comp_develop VARCHAR(255),
  comp_skill VARCHAR(255),
  comp_plan VARCHAR(255),
  comp_planning VARCHAR(255),
  comp_senior VARCHAR(255),
  comp_seniortwo VARCHAR(255),
  comp_financial VARCHAR(255),
  comp_pay VARCHAR(255),
  comp_other VARCHAR(255)
);

CREATE TABLE advisory(
  quiz_id VARCHAR (255),
  adv_training VARCHAR(255),
  adv_invest VARCHAR(255),
  adv_investing VARCHAR(255),
  adv_servises VARCHAR(255),
  adv_servisestwo VARCHAR(255),
  adv_outside VARCHAR(255),
  adv_outsidetwo VARCHAR(255),
  adv_certify VARCHAR(255),
  adv_certifytwo VARCHAR(255),
  adv_advice VARCHAR(255),
  adv_advicetwo VARCHAR(255),
  adv_specialty VARCHAR(255),
  adv_specialtytwo VARCHAR(255),
  adv_i_d VARCHAR(255),
  adv_i_dtwo VARCHAR(255),
  adv_lab VARCHAR(255),
  adv_labtwo VARCHAR(255),
  adv_important VARCHAR(255),
  adv_importantwo VARCHAR(255),
  adv_tec VARCHAR(255),
  adv_tectwo VARCHAR(255),
  adv_conacyt VARCHAR(255),
  adv_priority VARCHAR(255),
  adv_prioritytwo VARCHAR(255)
);

CREATE TABLE process(
  quiz_id VARCHAR (255),
  pro_soft VARCHAR (255),
  pro_softtwo VARCHAR (255),
  pro_indicators VARCHAR (255),
  pro_quality VARCHAR (255),
  pro_qualitytwo VARCHAR (255),
  pro_control VARCHAR (255),
  pro_bottle VARCHAR (255),
  pro_method VARCHAR (255),
  pro_methodtwo VARCHAR (255),
  pro_process VARCHAR (255),
  pro_processtwo VARCHAR (255),
  pro_technical VARCHAR (255),
  pro_plan VARCHAR (255),
  pro_securiry VARCHAR (255),
  pro_learn VARCHAR (255),
  pro_learntwo VARCHAR (255),
  pro_industry VARCHAR (255),
  pro_industrytwo VARCHAR (255)
);

CREATE TABLE marketing(
  quiz_id VARCHAR (255),
  mark_capture VARCHAR (255),
  mark_other VARCHAR (255),
  mark_mark VARCHAR (255),
  mark_feedback VARCHAR (255),
  mark_client VARCHAR (255),
  mark_sales VARCHAR (255),
  mark_export VARCHAR (255)
);

CREATE TABLE future(
  quiz_id VARCHAR (255),
  fut_next VARCHAR (255),
  fut_process VARCHAR (255),
  fut_processtwo VARCHAR (255),
  fut_tool VARCHAR (255),
  fut_select VARCHAR (255),
  fut_selectwo VARCHAR (255),
  fut_learn VARCHAR (255),
  fut_wish VARCHAR (255),
  fut_wishtwo VARCHAR (255),
  fut_item VARCHAR (255),
  fut_itemtwo VARCHAR (255),
  fut_tech VARCHAR (255),
  fut_techtwo VARCHAR (255)
);

CREATE TABLE fort(
  quiz_id VARCHAR (255),
  fort_one VARCHAR (255),
  fort_two VARCHAR (255),
  fort_three VARCHAR (255),
  fort_four VARCHAR (255),
  fort_five VARCHAR (255),
  fort_six VARCHAR (255)
);

CREATE TABLE codes(  
  code_id uuid DEFAULT uuid_generate_v4(),  
  user_email VARCHAR(255) NOT NULL,  
  code VARCHAR(255) NOT NULL,  
  PRIMARY KEY(code_id)
);
