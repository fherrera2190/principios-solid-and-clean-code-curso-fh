### Diccionarios ###

my_dict = dict()
my_other_dict = {}

print(type(my_dict))
print(type(my_other_dict))

my_other_dict = {"name": "Fernando", "last_name": "Herrera", "age": 33, 1: "Python"}
my_dict = {
    "name": "Fernando",
    "last_name": "Herrera",
    "age": 33,
    "Lenguajes": {"Python", "Java", "C#"},
    1: 1.70,
}
print(my_dict)
print(my_other_dict)
print(my_other_dict[1])


print(my_other_dict["name"])
print(my_other_dict["last_name"])
print(my_other_dict["age"])

my_other_dict["age"] = 34
print(my_other_dict)

# my_other_dict["address"] = "Calle falsa 123"
# print(my_other_dict)

print(len(my_other_dict))
print(len(my_dict))

print(my_dict["name"])
print(my_dict["name"])
print(my_dict[1])

print("Fernando" in my_other_dict)
print("name" in my_other_dict)
print("--------------------")
print(my_dict.items())
print(my_dict.keys())
print(my_dict.values())
print(my_dict.fromkeys(("name", 1)))

# print(dict.fromkeys(my_dict))

my_new_dict =  dict.fromkeys(my_dict,"Martin")
print(my_new_dict)

my_value = my_new_dict.values()
print(type(my_value))



print(list(my_new_dict))
print(tuple(my_new_dict))

print(set(my_new_dict))