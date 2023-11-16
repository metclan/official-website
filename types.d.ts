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
