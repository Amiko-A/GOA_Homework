def categorize_members(members):
    x = []
    for age, i in members:
        if age >= 55 and i > 7:
            x.append("Senior")
        else:
            x.append("Open")
    return x