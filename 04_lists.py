### Lists ###

my_list = list()
my_other_list = []

print(type(my_list))
print(type(my_other_list))

print(len(my_list))
print(len(my_other_list))

my_list = [35, 24, 62, 52, 30, 30, 17]

print(my_list)
print(len(my_list))

my_other_list =[35,1.77,"Fernando","Herrera"]
print(type(my_other_list))

print(my_other_list[0])
print(my_other_list[1])
print(my_other_list[-1]) #Ultimo elemento de la lista (my_other_list[-1])
print(my_other_list[-4]) 
#print(my_other_list[-5]) #Error 
print(my_other_list.count("Fernando") )
print("--------------")
age, height, name, surname  = my_other_list
print(name)
print(surname)

print(my_list+my_other_list)
print(list("123 45"))
print(["123 45"])


my_other_list.append("ferbeoulve")
print(my_other_list)

my_other_list.insert(len(my_other_list),"Nemesis")
my_other_list.insert(0,"Nemesis")

print(my_other_list)

my_other_list.remove("Nemesis")
print(my_other_list)

my_other_list.pop()
print(my_other_list)

del my_other_list[1]
print(my_other_list)

# my_list.clear()
# print(my_list)
my_new_list = my_list.copy()
print(my_new_list)
my_new_list.reverse()
print(my_new_list)

my_new_list.sort()
print(my_new_list)

print(my_new_list.index(30))

my_new_list.sort(reverse=True)
print(my_new_list)

print(my_new_list[1:3])

# my_new_list[8]="Hola" Error
# print(my_new_list)
