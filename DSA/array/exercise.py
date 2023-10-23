'''
Let us say your expense for every month are listed below,
January - 2200
February - 2350
March - 2600
April - 2130
May - 2190
Create a list to store these monthly expenses and using that find out:
'''

months = ['January', 'February', 'March', 'April', 'May']
expense = [2200, 2350, 2600, 2130, 2190]
# 1. In Feb, how many dollars you spent extra compare to January?
print(expense[months.index('February')] - expense[months.index('January')])

# 2. Find out your total expense in first quarter (first three months) of the year.
total = 0
for i in range(3):
    total += expense[i]
print(total)

# 3. Find out if you spent exactly 2000 dollars in any month
print(2000 in expense)

# 4. June month just finished and your expense is 1980 dollar. Add this item to our monthly expense list
months.append('June')
expense.append(1980)
print(months)
print(expense)

# 5. You returned an item that you bought in a month of April and
# got a refund of 200$. Make a correction to your monthly expense list
# based on this
expense[months.index('April')] = expense[months.index('April')] - 200
print(expense[months.index('April')])
print(expense)

'''
You have a list of your favourite marvel super heros.
heros=['spider man','thor','hulk','iron man','captain america']
Using this find out:
'''

heros=['spider man','thor','hulk','iron man','captain america']

# 1. Length of the list
print(len(heros))
# 2. Add 'black panther' at the end of this list
heros.append('black panther')
print(heros)
# 3. You realize that you need to add 'black panther' after 'hulk',
#    so remove it from the list first and then add it after 'hulk'
heros.pop()
print(heros)
heros.append('hulk')
print(heros)
# 4. Now you don't like thor and hulk because they get angry easily :)
#    So you want to remove thor and hulk from list and replace them with doctor strange (because he is cool).
#    Do that with one line of code.
heros[1:3] = ['doctor strange']
print(heros)
# 5. Sort the heros list in alphabetical order (Hint. Use dir() functions to list down all functions available in list)
print(sorted(heros))


'''
Create a list of all odd numbers between 1 and a max number. 
Max number is something you need to take from a user using input() function
'''

def list_odd():
    my_list = []
    max_n = int(input('Input max number: '))
    for i in range(1, max_n): # using range is non-inclusive of max_n. if we want to include max_n, use: max_n+1
        if i % 2 != 0:
            my_list.append(i)
    print(my_list)

list_odd()