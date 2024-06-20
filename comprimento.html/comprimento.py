def converter_cm_para_mm_polegadas(cm):
    # 1 centímetro é igual a 10 milímetros
    mm = cm * 10
    # 1 centímetro é aproximadamente igual a 0.393701 polegadas
    polegadas = cm * 0.393701
    return mm, polegadas

def resultado():
    cm = 100
    mm, polegadas = converter_cm_para_mm_polegadas(cm)
    print(f"Convertendo {cm} centímetros:")
    print(f"{cm} centímetros equivalem a {mm} milímetros.")
    print(f"{cm} centímetros equivalem a {polegadas} polegadas.")

# Chamada da função resultado
resultado()