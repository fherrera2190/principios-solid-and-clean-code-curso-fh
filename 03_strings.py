my_string = "Mi string"
my_other_string= 'Mi otro string'

print(len(my_string))
print(len(my_other_string))

print(my_string + " " + my_other_string)

my_new_line_string = "Este es un String\ncon salto de linea"

print(my_new_line_string)

my_tab_string = "\tEste es un String con tabulación"

print(my_tab_string)


my_scape_string = "\tEste es un String \n escapado"
print(my_scape_string)


my_scape_string = "\\tEste es un String \\n escapado"
print(my_scape_string)

#Format
name, surname,age = "Fernando", "Herrera",33
print("Mi nombre es {} {} y mi edad es {}".format(name, surname, age))
print("Mi nombre es %s %s y mi edad es %d" % (name, surname, age)) #'s' string 'd' int
print(f"Mi nombre es {name} {surname} y mi edad es {age}".format(name, surname, age))

# desempaquetado de caracteres
language = "Python"
a,b,c,d,e,f=language
print(a)
print(b)
print(c)
print(d)
print(e)
print(f)

#Divisiono
print('-----------------------------')
language_slice = language[1:3]
print(language_slice)

language_slice = language[1:]
print(language_slice)

language_slice = language[-2]
print(language_slice)


language_slice = language[0]
print(language_slice)


language_slice = language[0:6:2] #Pto
print(language_slice)
#Reversa
reversed_language = language[::-1]
print(">>>>>",reversed_language)
print("-------------------------------")
#Funciones
print(language.capitalize())
print(language.upper())
print(language.lower())
print(language.count("t"))
print(language.isnumeric())
print(language.startswith("Py"))
print(language.endswith("on"))

print(language.upper().isupper())
