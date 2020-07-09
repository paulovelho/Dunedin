"use strict";

export const apiData = {

	api_auth: "http://malte.localhost.com:3000",


	login: "/login",

	address: "/address/:id",
	addresses: "/addresses",

	customer: "/customer/:id",
	customers: "/customers",
	customers_autocomplete: "/customers/autocomplete",

	files: "/files",
	file: "/file/:id",
	file_view: "/file/:name/view",
	file_download: "/file/:name/download",
	file_upload: "/file/:id/upload",

	fiscal_receita: "/fiscal/cnpj",
	fiscal_ncm: "/fiscal/ncm",
	fiscal_cest: "/fiscal/cest",

	products: "/products",
	product: "/product/:id",

	suppliers: "/suppliers",
	supplier: "/supplier/:id",

	users: "/users",
	user: "/user/:id",
	user_password_reset: "/user/:id/reset",
	user_password_change: "/update-password",





	settings: "/settings",

	students: "/students",
	students_search: "/students/search",
	tutors_search: "/tutors/search",
	student: "/student/:id",
	student_does: "/student/:id/does",
	does_insert: "/student/:student_id/does/:course_id/with/:teacher_id",
	does_delete: "/student/:student_id/doesnt/:course_id/with/:teacher_id",

	courses: "/courses",
	course: "/course/:id",
	course_teachers: "/course/:id/teachers",
	teachers: "/teachers",
	teacher: "/teacher/:id",
	teacher_sign: "/teacher/:id/teaches/:course_id",
	teacher_quit: "/teacher/:id/quits/:course_id",

	discounts: "/discounts",
	discount: "/discount/:id",
	plans: "/plans",
	plan: "/plan/:id",

	calculator_run: "/calculator/:student_id/calc",
	orders_get: "/orders/from/:student_id",
	orders_open: "/orders/open",
	order_pay: "/order/:order_id/pay",
	order: "/order/:order_id",

	finance_balance: "/finance/balance",
	finance_transactions: "/finance/transactions",
	finance_transaction_id:"/finance/transaction/:id",
	finance_category: "/finance/categories",
	finance_category_id: "/finance/category/:id",

};
