type Service = {
  id: number;
  title: string;
  description: string;
  link: string;
};

type Variants = {
  hidden: {};
  visible: {};
  transition: {
    duration: number;
    delay: number;
  };
};

type Blog = {
  title: string;
  blogImage: any;
  category: string;
  description?: string;
  currentSlog: string;
  content?: any;
  _createdAt: string;
};
