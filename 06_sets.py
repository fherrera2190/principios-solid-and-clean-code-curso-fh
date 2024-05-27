### Sets ###

my_set = set()
my_other_set = {}

print(type(my_set))
print(type(my_other_set))# Incialmente es un diccionario
my_other_set ={"Fernando","Herrera",33}
print(type(my_other_set))

print(len(my_other_set))

print(my_other_set)

my_other_set.add("ferbeoulve")
print(my_other_set)#No es una estructura ordenada

my_other_set.add("ferbeoulve")
print(my_other_set)#No admite repetidos

print("Fernando" in my_other_set)
print("Fer" in my_other_set)

my_other_set.remove("ferbeoulve")
print(my_other_set)

my_set.update(my_other_set)

print(my_set)

print(list(my_other_set))
my_other_set.clear()
print(len(my_other_set))


# my_set = {35, 24, 62, 52, 30, 30, 17}
# print(my_set)
# print(type(my_set))

# print(type(my_other_set))