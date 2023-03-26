package com.cg.onlineplantnursery.planter.constants;

import com.cg.onlineplantnursery.exceptions.InvalidPlanterColorException;

public enum PlanterColor {
	RED(1, "red"), GREEN(2, "green"), YELLOW(3, "yellow"),;

	private int colorNumber;
	private String color;

	public int getColorNumber() {
		return colorNumber;
	}

	public String getColor() {
		return color;
	}

	PlanterColor(int colorNumber, String color) {
		this.colorNumber = colorNumber;
		this.color = color;
	}

	public static PlanterColor getColorByNumber(int colorNumber) {
		PlanterColor colors[] = PlanterColor.values();
		for (PlanterColor color : colors) {
			if (color.colorNumber == colorNumber) {
				return color;
			}
		}
		throw new InvalidPlanterColorException("color not found=" + colorNumber);
	}
}
