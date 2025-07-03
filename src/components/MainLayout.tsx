'use client';

import { useState } from 'react';
import { NavKey, navData } from '../data/navData';
import CategoryContent from './CategoryContent';
import NavigationSection from './NavigationSection'; 

export default function MainLayout() {
  const mainNavItems = Object.keys(navData) as NavKey[];
  const [activeMain, setActiveMain] = useState<NavKey>(mainNavItems[0]);

  return (
    <div>
      {/* <NavigationSection activeMain={activeMain} setActiveMain={setActiveMain} /> */}
      {/* <CategoryContent activeMain={activeMain} setActiveMain={setActiveMain} /> */}
    </div>
  );
}
