# pylint: disable-all

chicken = { "name": "Lady Gray", 
    "breed": "Silkie", 
    "total_egg_count": 12, 
    "egg_chart": {
        "M": True,
        "T": True,
        "W": True,
        "Th": True,
        "F": True,
        "S": False,
        "SU": True
    },
    "coop_mates": ["Butters", "Stevie", "Henry"]
}

for key in chicken.keys():
    print(key)

for value in chicken.values():
    print(value)

for (k, v) in chicken.items():
    print(k, '--->', v)
