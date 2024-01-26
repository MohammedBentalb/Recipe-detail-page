'use client';

import { motion } from 'framer-motion';
import { ElementType } from 'react';
import { useInView } from 'react-intersection-observer';

const fadeInVariants = {
  hidden: { opacity: 0, y: 2 },
  visible: { opacity: 1, y: 0 },
};

export function FadeIn<T extends ElementType>({
  as,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as'> & {
  as?: T;
}) {
  // @ts-ignore
  const Component = as ? motion[as] : motion.div;
  const [vRef, inView] = useInView({ triggerOnce: true });

  return (
    <Component
      variants={fadeInVariants}
      initial="hidden"
      ref={vRef}
      animate={inView ? "visible" : ''}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
      }}
      {...props}
    />
  );
}

const SlideInVariants = {
  hidden: { opacity: 0, y: -4 },
  visible: { opacity: 1, y: 0 },
};

export function SlideIn<T extends ElementType>({
  as,
  shouldDelay,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as'> & {
  as?: T;
  shouldDelay: boolean;
}) {
  // @ts-ignore
  const Component = as ? motion[as] : motion.div;
  const [vRef, inView] = useInView({ triggerOnce: true });
  return (
    <Component
      variants={SlideInVariants}
      initial="hidden"
      ref={vRef}
      animate={inView ? 'visible' : ''}
      transition={{
        ease: 'easeInOut',
        duration: .7,
        delay: shouldDelay ? 0.7 : 0,
      }}
      {...props}
    />
  );
}

const SlideLeftVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 },
  };
  
  export function SlideLeft<T extends ElementType>({
    as,
    ...props
  }: Omit<React.ComponentPropsWithoutRef<T>, 'as'> & {
    as?: T;
  }) {
    // @ts-ignore
    const Component = as ? motion[as] : motion.div;
    const [vRef, inView] = useInView({ triggerOnce: true });
    return (
      <Component
        variants={SlideLeftVariants}
        initial="hidden"
        ref={vRef}
        animate={inView ? 'visible' : ''}
        transition={{
          ease: 'easeInOut',
          duration: 0.3,
        }}
        {...props}
      />
    );
  }