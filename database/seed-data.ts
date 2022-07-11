interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Pendiente: A modo de test se muestra informacion",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "Finalizada: A modo de test se muestra informacion",
      status: "finished",
      createdAt: Date.now() - 1400000,
    },
    {
      description: "En progreso: A modo de test se muestra informacion",
      status: "in-progress",
      createdAt: Date.now() - 100000,
    },
  ],
};
