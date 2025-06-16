using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace SoundControllerWPFApp
{
    /// <summary>
    /// Logika interakcji dla klasy MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Slider_ValueChanged(object sender, RoutedPropertyChangedEventArgs<double> e)
        {
            volumeTextBlock.Text = "Głośność: " + sliderVolume.Value + "%"; 
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            sliderVolume.Value = 0;
        }

        private void volumeTextBox_TextChanged(object sender, TextChangedEventArgs e)
        {
            int result;
            if(int.TryParse(volumeTextBox.Text, out result))
            {
                if (result < 0 || result > 100)
                {
                    MessageBox.Show("Nieprawidłowy zakres danych. Proszę podać liczbę całkowitą od 1 do 100.");
                    volumeTextBox.Focus();
                    return;
                }
                sliderVolume.Value = result;
            }
            else
            {
                if (string.IsNullOrEmpty(volumeTextBox.Text))
                {
                    sliderVolume.Value = 0;
                    return;
                }
                else
                {
                    MessageBox.Show("Nieprawidłowy format danych. Proszę podać liczbę całkowitą od 1 do 100.");
                    volumeTextBox.Focus();
                    return;
                }
            }
        }
    }
}
