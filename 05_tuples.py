### Tuples ###
#Son inmutables
my_tuple= tuple()
my_other_tuple=()

my_tuple=(35,1.77,"Fernando","Herrera","Fernando")
my_other_tuple=(40,50,60,10)
print(my_tuple)
print(type(my_tuple))

print(my_tuple[0])
print(my_tuple[-1])
#print(my_tuple[4])#Error
#print(my_tuple[6])#Error


print(my_tuple.count("Fernando"))
print(my_tuple.index("Herrera"))
print(my_tuple.index("Fernando"))

# my_tuple[1]=1.70 Error 'tuple' object does not support item assignment

my_sum_tuple= my_tuple+my_other_tuple
print(my_sum_tuple)

print(my_sum_tuple[3:6])

