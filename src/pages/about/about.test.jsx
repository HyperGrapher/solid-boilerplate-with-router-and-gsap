import { describe, expect, test, it } from 'vitest';
import { render, fireEvent, screen } from 'solid-testing-library';
import { Router } from "@solidjs/router"

import About from './About';

describe('<About />', () => {

    it("should assert 'About Page' element exists.", () => {
      render(() => <Router><About /></Router>);
      const aboutpageText = screen.getByText('About Page');
      expect(aboutpageText).toBeInTheDocument();

	});


})