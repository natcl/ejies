/*
 * class called by ej.lop
 * lucky me, this is automatically generated :-)
 *
 */

package ej;

public class ListExp implements ListOperator {
	public float[] operate(float a, float b[])
	{
		float[] resultat = new float[b.length];
		
		for (int i = 0; i < b.length; i++)
			resultat[i] = (float) Math.exp(a);
		
		return resultat;
	}

	public float[] operate(float a[], float b)
	{
		float[] resultat = new float[a.length];
		
		for (int i = 0; i < a.length; i++)
			resultat[i] = (float) Math.exp(a[i]);
		
		return resultat;
	}

	public float[] operate(float a[], float b[])
	{
		int listLength = Math.min(a.length, b.length);
		float resultat[] = new float[listLength];
		
		for (int i = 0; i < listLength; i++)
			resultat[i] = (float) Math.exp(a[i]);
		
		return resultat;
	}
}