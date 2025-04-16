export type Category = {
  id: string;
  categoryName: string;
  categoryColor: string;
};

export type CategoryProgress = {
  id: string;
  userId: string;
  categoryId: string;
  progressRate: string;
  startDate: string;
  endDate: string;
  category: Category;
};

export type ProgressResponse = {
  status_code: number;
  data: {
    totalProgressRate: string;
    cheerUpMessage: string;
    categoryProgresses: CategoryProgress[];
  };
  error?: string;
};
